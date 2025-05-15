
import sum3569 from '../sum3569.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 92 to equal 185 + offset 0.9529931463088988', (t) => {
  assert.strictEqual(sum3569(93, 92), 185 + 0.9529931463088988);
});
