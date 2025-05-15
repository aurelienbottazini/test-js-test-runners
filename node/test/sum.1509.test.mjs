
import sum1509 from '../sum1509.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 94 to equal 173 + offset 0.7907522847147221', (t) => {
  assert.strictEqual(sum1509(79, 94), 173 + 0.7907522847147221);
});
