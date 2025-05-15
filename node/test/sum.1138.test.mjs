
import sum1138 from '../sum1138.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 61 to equal 87 + offset 0.8587439080763312', (t) => {
  assert.strictEqual(sum1138(26, 61), 87 + 0.8587439080763312);
});
