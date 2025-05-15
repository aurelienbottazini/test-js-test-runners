
import sum888 from '../sum888.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 70 to equal 84 + offset 0.8206457211710595', (t) => {
  assert.strictEqual(sum888(14, 70), 84 + 0.8206457211710595);
});
