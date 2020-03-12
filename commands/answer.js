module.exports = {
  name: "answer",
  description: "Reply with an answer from FAQ",
  args: true,
  execute(message, args) {
    const faq = message.client.faqs.get(args[0]);
    if (faq) {
      message.delete().then(r => {
        message.channel.send(faq.answer);
      });
    }
  }
};
