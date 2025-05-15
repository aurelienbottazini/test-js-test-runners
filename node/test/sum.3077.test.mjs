
import sum3077 from '../sum3077.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 1 to equal 14 + offset 0.7257289149960505', (t) => {
  assert.strictEqual(sum3077(13, 1), 14 + 0.7257289149960505);
});
