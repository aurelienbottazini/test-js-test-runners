
import sum3851 from '../sum3851.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 29 to equal 121 + offset 0.7889593161973163', (t) => {
  assert.strictEqual(sum3851(92, 29), 121 + 0.7889593161973163);
});
