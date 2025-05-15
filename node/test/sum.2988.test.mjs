
import sum2988 from '../sum2988.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 30 to equal 114 + offset 0.1843510541241854', (t) => {
  assert.strictEqual(sum2988(84, 30), 114 + 0.1843510541241854);
});
