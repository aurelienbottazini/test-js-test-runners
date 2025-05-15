
import sum3342 from '../sum3342.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 15 to equal 76 + offset 0.8781245176564848', (t) => {
  assert.strictEqual(sum3342(61, 15), 76 + 0.8781245176564848);
});
