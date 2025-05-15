
import sum1573 from '../sum1573.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 76 to equal 92 + offset 0.4612560998559251', (t) => {
  assert.strictEqual(sum1573(16, 76), 92 + 0.4612560998559251);
});
