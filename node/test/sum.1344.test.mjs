
import sum1344 from '../sum1344.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 95 to equal 175 + offset 0.22687053853794492', (t) => {
  assert.strictEqual(sum1344(80, 95), 175 + 0.22687053853794492);
});
