
import sum3038 from '../sum3038.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 48 to equal 74 + offset 0.12437941498429339', (t) => {
  assert.strictEqual(sum3038(26, 48), 74 + 0.12437941498429339);
});
