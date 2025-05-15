
import sum893 from '../sum893.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 56 to equal 73 + offset 0.609630719316275', (t) => {
  assert.strictEqual(sum893(17, 56), 73 + 0.609630719316275);
});
