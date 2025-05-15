
import sum1207 from '../sum1207.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 50 to equal 55 + offset 0.5260541482381162', (t) => {
  assert.strictEqual(sum1207(5, 50), 55 + 0.5260541482381162);
});
