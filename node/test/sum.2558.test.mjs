
import sum2558 from '../sum2558.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 89 to equal 182 + offset 0.059428694333588994', (t) => {
  assert.strictEqual(sum2558(93, 89), 182 + 0.059428694333588994);
});
