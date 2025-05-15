
import sum3100 from '../sum3100.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 83 to equal 95 + offset 0.2587325031894454', (t) => {
  assert.strictEqual(sum3100(12, 83), 95 + 0.2587325031894454);
});
