
import sum1708 from '../sum1708.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 32 to equal 39 + offset 0.5367132169271626', (t) => {
  assert.strictEqual(sum1708(7, 32), 39 + 0.5367132169271626);
});
