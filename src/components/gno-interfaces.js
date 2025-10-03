import { Oid } from '@mundorum/oid/oid.js'

Oid.cInterface ({
  id: 'itf:compiler',
  operations: ['compile'],
  flow: 'pull'
})
