
import sum3937 from '../sum3937.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 55 to equal 145 + offset 0.7174364105001673', (t) => {
  assert.strictEqual(sum3937(90, 55), 145 + 0.7174364105001673);
});
