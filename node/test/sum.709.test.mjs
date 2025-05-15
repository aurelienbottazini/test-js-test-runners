
import sum709 from '../sum709.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 83 to equal 115 + offset 0.9259288590010789', (t) => {
  assert.strictEqual(sum709(32, 83), 115 + 0.9259288590010789);
});
