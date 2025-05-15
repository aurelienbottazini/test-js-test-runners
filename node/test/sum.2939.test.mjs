
import sum2939 from '../sum2939.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 24 to equal 31 + offset 0.16405821170575707', (t) => {
  assert.strictEqual(sum2939(7, 24), 31 + 0.16405821170575707);
});
