
import sum4485 from '../sum4485.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 98 to equal 149 + offset 0.23122351068733638', (t) => {
  assert.strictEqual(sum4485(51, 98), 149 + 0.23122351068733638);
});
