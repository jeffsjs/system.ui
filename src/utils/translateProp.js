const dictionary = {
  Total: 'Total',
  noBroker: 'Sem Corretor',
  noOwners: 'Sem Proprietário',
  noZipcode: 'Sem Endereço/CEP',
  noType: 'Sem Tipo do Imóvel (Casa, Ap, etc)',
  noUsage: 'Sem Finalidade',
  noPretension: 'Sem Pretensão (Venda/ Locação)',
  noPrice: 'Sem Preço',
  noReference: 'Sem Referência',
  noPhoto: 'Sem Foto',
  noWebDescription: 'Sem Descrição para web',
  noAreaUseful: 'Sem Área util',
  noAreaCommon: 'Sem Área comum',
  noAreaPrivate: 'Sem Área privativa',
  noAreaBuilt: 'Sem Área construida',
  verticalWithoutEnterprise: 'Imóvel vertical sem empreendimento',
  verticalWithoutAddOnAddress: 'Imóvel vertical sem complemento',
  propertiesWithPhotos: 'Imóveis com fotos',
  propertiesWithArchives: 'Imóveis com arquivos',
  totalPhoto: 'Total de fotos do imóvel',
  averagePhotos: 'Média de fotos',
  noEmail: 'Sem E-mail',
  noProfile: 'Sem Perfil',
  onlyBasicInformations: 'Apenas Informações Básicas',
  enterpriseWithPhotos: 'Empreendimentos com Fotos',
  enterpriseWithArchives: 'Empreendimentos com Arquivos',
  noEmails: 'Sem E-mails',
  noPhones: 'Sem Telefones',
  noName: 'Sem Nome',
  noMedia: 'Sem Comunicação',
  owners: 'Proprietários',
  interested: 'Interessados',

  analysis_finished: 'As informações conferem com o seus dados atuais?',
  homologation_begin: 'Estamos criando um ambiente para você conferir os seus dados, em breve, você receberá um e-mail com um link e mais instruções.',
  homologation_finished: 'Confira como estão as informações no Imob.',
  production_begin: 'Falta pouco! Agora estamos criando o seu ambiente de produção, em breve, você receberá um e-mail com mais instruções e um link de acesso.',
  production_finished: 'Pronto! A sua migração foi concluída acesse o link e seja bem vindo!',


  analysis_refused: 'Verificamos que você não concordou com as informações, entre em contato por e-mail: suporte@suporte.com.br ou agende uma reunião com um de nossos atendentes.',
  homologation_refused: 'Verificamos que você não concordou com as informações presente no ambiente, entre em contato por e-mail: suportes@suporte.com.br ou agende uma reunião com um de nossos atendentes.',

}

export const translateProp = (prop) => {
  return dictionary[prop] || '';
}
