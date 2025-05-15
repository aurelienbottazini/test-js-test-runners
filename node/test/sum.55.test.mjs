
import sum55 from '../sum55.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 60 to equal 98 + offset 0.034057729092633604', (t) => {
  assert.strictEqual(sum55(38, 60), 98 + 0.034057729092633604);
});
