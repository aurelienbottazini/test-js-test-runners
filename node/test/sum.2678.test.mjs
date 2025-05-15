
import sum2678 from '../sum2678.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 85 to equal 171 + offset 0.3826550720822244', (t) => {
  assert.strictEqual(sum2678(86, 85), 171 + 0.3826550720822244);
});
