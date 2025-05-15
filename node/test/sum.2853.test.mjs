
import sum2853 from '../sum2853.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 78 to equal 97 + offset 0.9426500846768621', (t) => {
  assert.strictEqual(sum2853(19, 78), 97 + 0.9426500846768621);
});
