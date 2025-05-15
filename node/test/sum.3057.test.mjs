
import sum3057 from '../sum3057.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 4 to equal 30 + offset 0.37487209939871513', (t) => {
  assert.strictEqual(sum3057(26, 4), 30 + 0.37487209939871513);
});
