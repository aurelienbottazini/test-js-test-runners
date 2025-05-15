
import sum1047 from '../sum1047.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 65 to equal 113 + offset 0.8578885797388549', (t) => {
  assert.strictEqual(sum1047(48, 65), 113 + 0.8578885797388549);
});
