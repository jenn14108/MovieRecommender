import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

# read the csv file and load the data
movieData = pd.read_csv('../../movies_metadata.csv', low_memory=False)

# inspect the first 5 rows of dataset
# 24 columns total. Of interest: genres, original_title, overview
# print(movieData.head())

# genres of the first 5 rows of data
# print(movieData['genres'].head(5))
# overview of the first 5 rows of data
# print(movieData['overview'].head(5))


######################################################################
# Recommendation system model training

# 1. Create a TF-IDF matrix
# The TfidfVectorizer converts a collection of raw documents to a matrix of
# TF-IDF (term frequency-inverse document frequency) features. It's used to
# measure how relevant a word is to a document in a collection of documents,
# and is used to remove words with no semantic value from the corpus.

# remove all english stop words eg. "a", "the", "but", "what"
tfidfVector = TfidfVectorizer(stop_words='english')
movieData['overview'] = movieData['overview'].fillna('')
# fit & transform the data to create the matrix
tfidfMatrix = tfidfVector.fit_transform(movieData['overview'])
# print(tfidfMatrix)


# 2. Create a similarity matrix
similarMatrix = linear_kernel(tfidfMatrix, tfidfMatrix)

# 3. Create indices
# Create a mapping from index -> movie title and at the same time
# clean up our data by removing any repeated movies by title.
indices = pd.Series(movieData.index,
    index=movieData['title'].drop_duplicates())

print(indices[:5])


###################################################################
# Create function to do the actual recommending of movies
def contentBasedRecommnder(title, similarityScores=similaryMatrix):
    index = indices[title]
    similarityScores = list(enumerate(similarityMatrix[index]))
    similarityScores = sorted(similarityScores, key=lambda x: x[1], reverse=True)
    similarityScores = similarityScores[1:11]

    movieIndices = [i[0] for i in similarityScores]
    
    return movieData['title'].iloc[movieIndices]
