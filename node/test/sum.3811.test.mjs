
import sum3811 from '../sum3811.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 80 to equal 108 + offset 0.9814190264518301', (t) => {
  assert.strictEqual(sum3811(28, 80), 108 + 0.9814190264518301);
});
