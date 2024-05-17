
# Monitoramento de Níveis de Água em Pelotas

Este repositório contém um script Python automatizado para monitorar os níveis de água do Canal São Gonçalo e da Lagoa dos Patos em Pelotas, utilizando APIs públicas para coletar dados de sensores em tempo real. Os dados são então enviados automaticamente para este repositório GitHub para fácil acesso e visualização.

## Descrição

O projeto visa fornecer uma visualização acessível e atualizações regulares sobre os níveis de água em Pelotas para prevenção de enchentes e gestão de recursos hídricos. O script está configurado para rodar em um servidor e atualizar os dados a cada 30 minutos.

## Funcionalidades

- Coleta de dados do nível de água do Canal São Gonçalo e Lagoa dos Patos.
- Atualização automática da data e hora da última coleta no fuso horário de São Paulo.
- Envio dos dados coletados para este repositório GitHub em formato JSON.
- Visualização das informações através de uma página HTML hospedada via GitHub Pages.

## Como Funciona

O script `getWaterLevel.py` realiza as seguintes ações:

1. **Coleta de Dados:** Utiliza APIs para coletar os níveis de água.
2. **Processamento de Dados:** Aplica qualquer lógica necessária para ajustar os dados coletados (como conversões de unidade).
3. **Atualização de Timestamp:** Adiciona a data e hora da coleta, ajustada para o fuso horário de São Paulo.
4. **Envio para o GitHub:** Os dados atualizados são enviados para este repositório, atualizando o arquivo `nivel_agua.json`.
5. **Visualização:** Uma página HTML (`index.html`) usa estes dados para mostrar as informações atualizadas sobre os níveis de água.

## Instalação e Execução

### Pré-requisitos

- Python 3.6 ou superior
- Bibliotecas Python: `requests`, `json`, `base64`, `pytz`
- Um servidor ou ambiente que suporte a execução periódica de scripts Python (por exemplo, cron jobs em um servidor Linux).

### Configuração

1. Clone este repositório em seu servidor ou ambiente de execução local.
2. Instale as dependências necessárias utilizando:
   ```bash
   pip install -r requirements.txt
   ```
3. Configure o cron para executar o script `getWaterLevel.py` a cada 30 minutos:
   ```bash
   */30 * * * * /caminho/para/python3 /caminho/para/getWaterLevel.py
   ```
