
import sum2099 from '../sum2099.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 46 to equal 145 + offset 0.9645044202279941', (t) => {
  assert.strictEqual(sum2099(99, 46), 145 + 0.9645044202279941);
});
