
import sum708 from '../sum708.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 1 to equal 63 + offset 0.4316298905262498', (t) => {
  assert.strictEqual(sum708(62, 1), 63 + 0.4316298905262498);
});
