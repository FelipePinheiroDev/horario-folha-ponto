# horario-folha-ponto

Esta aplicação tem por objetivo gerar valores aleatórios para preenchimento da folha-ponto da FAPEU.

Regras para geração dos horários:

* O expediente inicia entre 07:50 e 08:10
* O primeiro período termina após um tempo aleatório entre 03:55 e 04:05
* O horário de alemoço dura entre 01:50 e 02:00
* O segundo período termina após um tempo aleatório entre 03:55 e 04:05

Deve-se criar um arquivo [.env](https://www.npmjs.com/package/dotenv) na raiz do projeto para carregar as seguintes variáveis de ambiente:

<!-- markdownlint-disable MD040 -->

```
NO_WORK_DAYS=<dias do mês separados por vírgula em que não houve expediente>
TOTAL_DAYS=<total de dias do mês>
```

<!-- markdownlint-enable MD040 -->