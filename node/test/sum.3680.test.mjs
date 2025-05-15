
import sum3680 from '../sum3680.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 80 to equal 134 + offset 0.23617535772255838', (t) => {
  assert.strictEqual(sum3680(54, 80), 134 + 0.23617535772255838);
});
