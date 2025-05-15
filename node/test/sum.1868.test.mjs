
import sum1868 from '../sum1868.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 84 to equal 87 + offset 0.46597882032379867', (t) => {
  assert.strictEqual(sum1868(3, 84), 87 + 0.46597882032379867);
});
