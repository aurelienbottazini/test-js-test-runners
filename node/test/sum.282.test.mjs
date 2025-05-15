
import sum282 from '../sum282.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 16 to equal 73 + offset 0.8802723763799236', (t) => {
  assert.strictEqual(sum282(57, 16), 73 + 0.8802723763799236);
});
