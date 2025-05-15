
import sum1426 from '../sum1426.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 74 to equal 145 + offset 0.40225928216887985', (t) => {
  assert.strictEqual(sum1426(71, 74), 145 + 0.40225928216887985);
});
