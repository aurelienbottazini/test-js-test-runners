
import sum4947 from '../sum4947.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 84 to equal 103 + offset 0.9856978755932106', (t) => {
  assert.strictEqual(sum4947(19, 84), 103 + 0.9856978755932106);
});
