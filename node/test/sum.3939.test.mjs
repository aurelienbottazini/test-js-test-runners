
import sum3939 from '../sum3939.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 74 to equal 103 + offset 0.31429000443544286', (t) => {
  assert.strictEqual(sum3939(29, 74), 103 + 0.31429000443544286);
});
