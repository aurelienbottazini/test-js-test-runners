
import sum4133 from '../sum4133.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 89 to equal 115 + offset 0.8644319168860135', (t) => {
  assert.strictEqual(sum4133(26, 89), 115 + 0.8644319168860135);
});
