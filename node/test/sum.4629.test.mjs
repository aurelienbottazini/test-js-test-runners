
import sum4629 from '../sum4629.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 44 to equal 140 + offset 0.825587431094809', (t) => {
  assert.strictEqual(sum4629(96, 44), 140 + 0.825587431094809);
});
