
import sum262 from '../sum262.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 34 to equal 78 + offset 0.0654883653273256', (t) => {
  assert.strictEqual(sum262(44, 34), 78 + 0.0654883653273256);
});
