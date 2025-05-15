
import sum2059 from '../sum2059.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 60 to equal 135 + offset 0.819379274921065', (t) => {
  assert.strictEqual(sum2059(75, 60), 135 + 0.819379274921065);
});
