const ingredientsUrl = 'https://norma.nomoreparties.space/api/ingredients'

export function ingredientsApi(){
    return fetch(ingredientsUrl,{
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((response) => response.json())
    .catch((error) => {
        console.error('Error:', error);
      })
    }