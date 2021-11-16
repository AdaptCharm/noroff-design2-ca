import { Page, Text, Card } from '@components/ui'
import Image from 'next/image'

export default function _Card() {
  return (
    <Page title="Card">
      <div className="max-w-4xl mx-auto w-full">
        {/* Description */}
        <div className="flex flex-col gap-24">
          <div className="space-y-8">
            <Text as="h1">Card</Text>
            <Text as="h2" size={18} weight={400}>
              Displays a card.
            </Text>
          </div>

          {/* Default */}
          <div className="space-y-8">
            <Text as="h3">Default</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              <Card>
                <Text>Lorem dolar ipsum.</Text>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="space-y-8">
            <Text as="h3">Image</Text>
            <div className="flex flex-col gap-8 md:flex-row border border-gray-200 rounded-md p-6">
              <Card>
                <div className="relative w-32 h-32">
                  <Image src="/favicon/icon-512.png" alt="Logo" layout="fill" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
