const URL = 'https://user-api.tarleylana.repl.co/users'

export async function findAll() { // pesquisar, buscar os dados
  const options = {
    method: 'GET',
    headers: {
      Authorization: '12116534',
      accept: 'application/json'
    }
  }

  const httpResponse = await fetch(URL, options)

  if (httpResponse.ok) {
    const responseBody = await httpResponse.json()
    return responseBody.data
  } else {
    throw new Error('Falha ao obter os cadastros')
  }
}

export async function insert(cadastro) {
  const options = {
    method: 'POST',
    headers: {
      Authorization: '12116534',
      accept: 'application/json',
      'Content-Type': 'application/json'  // atenção nessa linha pq pode retornar erro 404, pois não encontra a rota de requisição
    },
    body: JSON.stringify(cadastro) // converte um objeto javascript para string
  }

  const httpResponse = await fetch(URL, options)

  if (httpResponse.ok) {
    const responseBody = await httpResponse.json()
    return responseBody.data
  } else {
    throw new Error('Falha ao se cadastrar')
  }
}

export async function removeById(id) {
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: '12116534',
      accept: 'application/json'
    }
  }

  const httpResponse = await fetch(URL + '/' + id, options)

  if (httpResponse.ok) {
    const responseBody = await httpResponse.json()
    return responseBody.data
  } else {
    throw new Error('Falha ao excluir cadastro')
  }
}