
import sum3106 from '../sum3106.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 1 to equal 54 + offset 0.9244021632893252', (t) => {
  assert.strictEqual(sum3106(53, 1), 54 + 0.9244021632893252);
});
