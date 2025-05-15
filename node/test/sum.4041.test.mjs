
import sum4041 from '../sum4041.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 17 to equal 38 + offset 0.42304831302135915', (t) => {
  assert.strictEqual(sum4041(21, 17), 38 + 0.42304831302135915);
});
