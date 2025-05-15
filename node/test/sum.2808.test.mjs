
import sum2808 from '../sum2808.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 87 to equal 153 + offset 0.6581128676873736', (t) => {
  assert.strictEqual(sum2808(66, 87), 153 + 0.6581128676873736);
});
