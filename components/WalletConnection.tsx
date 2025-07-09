'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function WalletConnection() {
  const { address, isConnected, chain } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected && address) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>✅ Carteira Conectada</CardTitle>
          <CardDescription>
            Endereço: {address.slice(0, 6)}...{address.slice(-4)}
            <br />
            Rede: {chain?.name || 'Desconhecida'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => disconnect()} variant="outline">
            Desconectar
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>🔌 Conectar Carteira</CardTitle>
        <CardDescription>
          Conecte sua carteira para interagir com o contrato
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {connectors.map((connector) => (
          <Button
            key={connector.id}
            onClick={() => connect({ connector })}
            disabled={isPending}
            className="w-full"
          >
            {isPending ? 'Conectando...' : `Conectar ${connector.name}`}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}