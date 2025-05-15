
import sum929 from '../sum929.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 19 to equal 48 + offset 0.4931191230240284', (t) => {
  assert.strictEqual(sum929(29, 19), 48 + 0.4931191230240284);
});
