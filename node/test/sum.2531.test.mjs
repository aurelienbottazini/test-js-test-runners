
import sum2531 from '../sum2531.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 52 to equal 69 + offset 0.8865403272351844', (t) => {
  assert.strictEqual(sum2531(17, 52), 69 + 0.8865403272351844);
});
