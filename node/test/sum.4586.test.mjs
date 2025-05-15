
import sum4586 from '../sum4586.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 83 to equal 150 + offset 0.4973102834148603', (t) => {
  assert.strictEqual(sum4586(67, 83), 150 + 0.4973102834148603);
});
